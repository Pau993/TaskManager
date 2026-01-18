import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let mockUserRepository;

  beforeEach(async () => {
    // Mock del repositorio
    mockUserRepository = {
      find: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
  it('should return an array of users', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Natalia',
        email: 'natalia@example.com',
        createdAt: new Date(),
        tasks: [],
      },
      {
        id: 2,
        name: 'Juan',
        email: 'juan@example.com',
        createdAt: new Date(),
        tasks: [],
      },
    ];

    mockUserRepository.find.mockResolvedValue(mockUsers);

    const result = await service.findAll();

    expect(result).toEqual(mockUsers);
    expect(mockUserRepository.find).toHaveBeenCalled();
  });
});


  describe('create', () => {
    it('should create and return a new user', async () => {
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


      mockUserRepository.create.mockReturnValue(createUserDto);
      mockUserRepository.save.mockResolvedValue(mockNewUser);

      const result = await service.create(createUserDto);

      expect(result).toEqual(mockNewUser);
      expect(mockUserRepository.create).toHaveBeenCalledWith(createUserDto);
      expect(mockUserRepository.save).toHaveBeenCalledWith(createUserDto);
    });

    it('should throw an error if user creation fails', async () => {
      const createUserDto = {
        name: 'Natalia',
        email: 'natalia@example.com',
      };

      mockUserRepository.create.mockReturnValue(createUserDto);
      mockUserRepository.save.mockRejectedValue(
        new Error('Database error'),
      );

      await expect(service.create(createUserDto)).rejects.toThrow(
        'Database error',
      );
    });
  });
});
