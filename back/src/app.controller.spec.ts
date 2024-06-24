import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('jokes', () => {
    it('should return joke types', () => {
      expect(appController.getJokeTypes()).toEqual([
        'general', 'programming', 'knock-knock', 'animal', 'blonde',
        'Christmas', 'family', 'math', 'science', 'sports'
      ]);
    });

    it('should return jokes by type', async () => {
      const jokes = await appController.getJokesByType('general');
      expect(jokes.length).toBeLessThanOrEqual(10);
    });
  });
});