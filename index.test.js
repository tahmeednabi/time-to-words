const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 10 mins - 2:10', () => {
    const timeInWords = convertTimeToWords('2:10');
    expect(timeInWords).toBe('ten past two');
  });

  it('Handles times after 50 mins - 2:50', () => {
    const timeInWords = convertTimeToWords('2:50');
    expect(timeInWords).toBe('ten to three');
  });

  it('Handles times at the hour', () => {
    const timeInWords = convertTimeToWords('3:00');
    expect(timeInWords).toBe("three o' clock");
  });

  it('Handles 24 hour time', () => {
    const timeInWords = convertTimeToWords('16:20');
    expect(timeInWords).toBe('twenty past four');
  });

  it('Handles 24 hour time - 23:59', () => {
    const timeInWords = convertTimeToWords('23:59');
    expect(timeInWords).toBe('one to twelve');
  });
});
