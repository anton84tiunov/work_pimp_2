import Redis, { RedisOptions, Redis as RedisClient } from 'ioredis';

class RedisSingleton {
  private static instance: RedisSingleton;
  private redisClient: RedisClient;

  private constructor(options: RedisOptions) {
    this.redisClient = new Redis(options);
  }

  public static getInstance(options: RedisOptions): RedisSingleton {
    if (!RedisSingleton.instance) {
      RedisSingleton.instance = new RedisSingleton(options);
    }
    return RedisSingleton.instance;
  }

  public async set(key: string, value: string, expirationInSeconds?: number): Promise<void> {
    if (expirationInSeconds) {
      await this.redisClient.set(key, value, 'EX', expirationInSeconds);
    } else {
      await this.redisClient.set(key, value);
    }
  }

  public async get(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  public async del(key: string): Promise<number> {
    return await this.redisClient.del(key);
  }

  public async expire(key: string, expirationInSeconds: number): Promise<number> {
    return await this.redisClient.expire(key, expirationInSeconds);
  }

  public async quit(): Promise<void> {
    await this.redisClient.quit();
  }
}

const redisOptions: RedisOptions = {
  host: 'localhost',
  port: 6379,
  // Другие опции, если необходимо
};

const redisSingleton = RedisSingleton.getInstance(redisOptions);

export default redisSingleton;