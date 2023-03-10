import { Test } from '@nestjs/testing';
import { EmployeeService } from '@application/services/employee.service';
import { EmployeeController } from '@controller/v1/employee.controller';
import { Employee } from '@infrastructure/data/mappings/employee.map';
import { CreateEmployeeViewModel } from '@application/view-models/employee/CreateEmployee.view-models';
import { UpdateEmployeeViewModel } from '@application/view-models/employee/UpdateEmployee.view-models';

const employeeEntityList: Employee[] = [
  new Employee({
    id: '13f2cf2d-89da-4770-84c3-528064792008',
    firstName: 'Natanael 1',
    lastName: 'Borges',
    email: 'natanael.borges@gmail.com',
  }),
  new Employee({
    id: '13f2cf2d-89da-4770-84c3-528064792009',
    firstName: 'Natanael 2',
    lastName: 'Borges',
    email: 'natanael.borges@gmail.com',
  }),
  new Employee({
    id: '13f2cf2d-89da-4770-84c3-528064792010',
    firstName: 'Natanael 3',
    lastName: 'Borges',
    email: 'natanael.borges@gmail.com',
  }),
];

const newEmployeeEntity = new Employee({
  firstName: 'Natanael 4',
  lastName: 'Borges',
  email: 'natanael.borges@gmail.com',
});

const responseList = {
  code: 200,
  data: employeeEntityList,
  message: 'Success',
  timestamp: 1677824630588,
};

const response = {
  code: 200,
  data: newEmployeeEntity,
  message: 'Success',
  timestamp: 1677824630588,
};

const updatedEmployeeEntity = new Employee({
  active: false,
});

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        {
          provide: EmployeeService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(responseList),
            create: jest.fn().mockResolvedValue(response),
            findOne: jest.fn().mockResolvedValue(responseList[0]),
            update: jest.fn().mockResolvedValue(updatedEmployeeEntity),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(employeeController).toBeDefined();
    expect(employeeService).toBeDefined();
  });

  describe('findAll', () => {
    it('should get a employee item successfully', async () => {
      // Act
      const result = await employeeController.findAll();

      // Assert
      expect(result).toEqual(responseList);
      expect(typeof result).toEqual('object');
      expect(employeeService.findAll).toHaveBeenCalledTimes(1);
    });
  });

  // describe('get', () => {
  //   it('should get a employee item successfully', async () => {
  //     // Act
  //     const result = await employeeController.findOne('1');

  //     // Assert
  //     expect(result).toEqual(responseList[0]);
  //     expect(employeeService.findOne).toHaveBeenCalledTimes(1);
  //     expect(employeeService.findOne).toHaveBeenCalledWith('1');
  //   });
  // });

  describe('create', () => {
    it('should create a new employee item successfully', async () => {
      // Arrange
      const body: CreateEmployeeViewModel = {
        firstName: 'Natanael 4',
        lastName: 'Borges',
        email: 'natanael.borges@gmail.com',
      };

      // Act
      const result = await employeeController.create(body);

      // Assert
      expect(result).toEqual(response);
      expect(employeeService.create).toHaveBeenCalledTimes(1);
      expect(employeeService.create).toHaveBeenCalledWith(body);
    });
  });

  describe('update', () => {
    it('should update a employee item successfully', async () => {
      // Arrange
      const body: UpdateEmployeeViewModel = {
        firstName: 'Natanael',
      };

      // Act
      const result = await employeeController.update('1', body);

      // Assert
      expect(result).toEqual(updatedEmployeeEntity);
      expect(employeeService.update).toHaveBeenCalledTimes(1);
      expect(employeeService.update).toHaveBeenCalledWith('1', body);
    });
  });
});
