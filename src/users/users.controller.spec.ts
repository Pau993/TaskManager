import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const mockUsersService = {
      findAll: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers = [
        { id: 1, name: 'Natalia', email: 'natalia@example.com', createdAt: new Date(), tasks: [] },
        { id: 2, name: 'Juan', email: 'juan@example.com', createdAt: new Date(), tasks: [] },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(mockUsers);

      const result = await controller.findAll();

      expect(result).toEqual(mockUsers);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto = {
        name: 'Natalia',
        email: 'natalia@example.com',
      };

      const mockNewUser = {
        id: 1,
        ...createUserDto,
        createdAt: new Date(),
        tasks: [],
      };

      jest.spyOn(service, 'create').mockResolvedValue(mockNewUser);

      const result = await controller.create(createUserDto);

      expect(result).toEqual(mockNewUser);
      expect(service.create).toHaveBeenCalledWith(createUserDto);
    });

    it('should call service.create with correct parameters', async () => {
      const createUserDto = {
        name: 'Test User',
        email: 'test@example.com',
      };

      jest.spyOn(service, 'create').mockResolvedValue({
        id: 1,
        ...createUserDto,
        createdAt: new Date(),
        tasks: [],
      });

      await controller.create(createUserDto);

      expect(service.create).toHaveBeenCalledWith(createUserDto);
      expect(service.create).toHaveBeenCalledTimes(1);
    });
  });
});
