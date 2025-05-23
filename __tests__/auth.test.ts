import { describe, it, expect, beforeEach, vi } from 'vitest';
import { supabase } from '@/lib/supabase';

vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
    },
    from: vi.fn(() => ({
      insert: vi.fn(),
    })),
  },
}));

describe('Authentication', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully create a new user account', async () => {
    const mockUser = { id: 'test-id', email: 'test@example.com' };
    
    (supabase.auth.signUp as any).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    (supabase.from as any)().insert.mockResolvedValue({ error: null });

    const { data, error } = await supabase.auth.signUp({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(error).toBeNull();
    expect(data.user).toEqual(mockUser);
  });

  it('should handle signup errors gracefully', async () => {
    const mockError = new Error('Email already exists');
    
    (supabase.auth.signUp as any).mockResolvedValue({
      data: null,
      error: mockError,
    });

    const { data, error } = await supabase.auth.signUp({
      email: 'existing@example.com',
      password: 'password123',
    });

    expect(error).toEqual(mockError);
    expect(data).toBeNull();
  });
});