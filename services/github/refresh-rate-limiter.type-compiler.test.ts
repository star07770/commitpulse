import { expectTypeOf, describe, test } from 'vitest';
import { RefreshRateLimiter, refreshRateLimiter } from './refresh-rate-limiter';

describe('RefreshRateLimiter type compiler validation', () => {
  test('singleton instance type', () => {
    expectTypeOf(refreshRateLimiter).toEqualTypeOf<RefreshRateLimiter>();
  });

  test('checkLimit return type', () => {
    expectTypeOf<ReturnType<RefreshRateLimiter['checkLimit']>>().toEqualTypeOf<{
      success: boolean;
      limit: number;
      remaining: number;
      reset: number;
    }>();
  });

  test('setLimit parameter types', () => {
    expectTypeOf<RefreshRateLimiter['setLimit']>().toBeFunction();

    expectTypeOf<Parameters<RefreshRateLimiter['setLimit']>>().toEqualTypeOf<[number, number?]>();
  });

  test('reset method type', () => {
    expectTypeOf<RefreshRateLimiter['reset']>().toBeFunction();

    expectTypeOf<ReturnType<RefreshRateLimiter['reset']>>().toBeVoid();
  });

  test('getInstance singleton type', () => {
    expectTypeOf(RefreshRateLimiter.getInstance()).toEqualTypeOf<RefreshRateLimiter>();
  });
});
