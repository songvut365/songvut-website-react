import { calculateWorkYear } from '../src/utils/calculate.work';

describe('calculateWorkYear', () => {
  describe('with valid input', () => {
    it('should return "0m" when the work period is less than 1 month', () => {
      expect(calculateWorkYear('July 2022 - July 2022')).toBe('0m');
    });

    it('should return "10m" when the work period is 10 months', () => {
      expect(calculateWorkYear('July 2022 - May 2023')).toBe('10m');
    });

    it('should return "11m" when the work period is 11 months', () => {
      expect(calculateWorkYear('July 2022 - June 2023')).toBe('11m');
    });

    it('should return "1y" when the work period is exactly 12 months', () => {
      expect(calculateWorkYear('July 2022 - July 2023')).toBe('1y');
    });

    it('should return "2y" when the work period is exactly 24 months', () => {
      expect(calculateWorkYear('July 2022 - July 2024')).toBe('2y');
    });

    it('should return "1y 5m" when the work period is 17 months', () => {
      expect(calculateWorkYear('July 2022 - December 2023')).toBe('1y 5m');
    });

    it('should return "2y 5m" when the work period is 29 months', () => {
      expect(calculateWorkYear('July 2022 - December 2024')).toBe('2y 5m');
    });

    it('should return "30y" when the work period is exactly 360 months', () => {
      expect(calculateWorkYear('July 2022 - July 2052')).toBe('30y');
    });
  });

  describe('with invalid input', () => {
    it('test with invalid start date format', function() {
      expect(() => calculateWorkYear("July 2022")).toThrowError('Invalid date range format');
    });

    it('test with invalid end date format', function() {
      expect(() => calculateWorkYear("July 2022 -")).toThrowError('Invalid date range format');
    });
    
    it('test with invalid date range order', function() {
      expect(() => calculateWorkYear("December 2022 - July 2022")).toThrowError('Invalid date range order');
    });

    it('test with end date before start date', function() {
      expect(() => calculateWorkYear("July 2023 - July 2022")).toThrowError('Invalid date range order');
    });
    
    it('test with sentence', function() {
      expect(() => calculateWorkYear("hello world")).toThrowError('Invalid date range format');
    });

    it('test with string number', function() {
      expect(() => calculateWorkYear("999")).toThrowError('Invalid date range format');
    });

    it('test with special characters', function() {
      expect(() => calculateWorkYear("!@#$%^&*()_+")).toThrowError('Invalid date range format');
    });
  });
});
