class TestingRules {
  public testCognitiveComplexityRule(input: any) {
    const localVariable1 = 1;
    const localVariable2 = 2;
    const localVariable3 = 3;
    const localVariable4 = 4;
    const localVariable5 = 5;

    const misingProperty = input?.property;

    if (!input?.property) {
      this.logger.info(misingProperty);

      return 'Exit if no value';
    }

    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        this.logger.info(String(i));
      }
    }

    try {
      const addValue = input + 2;

      return addValue;
    } catch (error) {
      console.log('error happened');
    }

    const condition1 = input > localVariable5 && input > localVariable3;
    const condition2 = input < localVariable3 || input < localVariable4;
    const condition3 = (input !== localVariable4 && input === localVariable5) || input >= 0;

    switch (input) {
    case 1: this.logger.info(String(condition1));break;
    case 2: this.logger.info(String(condition2));break;
    case 3: this.logger.info(String(condition3));break;
    default: console.log('default');
    }


    if (input && input !== localVariable1) {
      if (input && input !== localVariable2) {
        if (input && input !== localVariable3) {
          if (input && input !== localVariable4) {
            if (input && input !== localVariable5) {
              const localVariable6 = 6;
              const localVariable7 = 7;
              const localVariable8 = 8

              if (input && input !== localVariable6) {
                return 'Test congtivitive complexity rule #1';
              } else if (input && input !== localVariable7) {
                return 'Test congtivitive complexity rule #2';
              } else if (input && input !== localVariable8) {
                return  'Test congtivitive complexity rule #1';
              }
            }
          }
        }
      }
    }
  }
}


function testCognitiveRule(input: any) {
  const localVariable1 = 1;
    const localVariable2 = 2;
    const localVariable3 = 3;
    const localVariable4 = 4;
    const localVariable5 = 5;

    const misingProperty = input?.property;

    if (!input?.property) {
      this.logger.info(misingProperty);

      return 'Exit if no value';
    }

    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        this.logger.info(String(i));
      }
    }

    try {
      const addValue = input + 2;

      return addValue;
    } catch (error) {
      console.log('error happened');
    }

    const condition1 = input > localVariable5 && input > localVariable3;
    const condition2 = input < localVariable3 || input < localVariable4;
    const condition3 = (input !== localVariable4 && input === localVariable5) || input >= 0;

    switch (input) {
    case 1: this.logger.info(String(condition1));break;
    case 2: this.logger.info(String(condition2));break;
    case 3: this.logger.info(String(condition3));break;
    default: console.log('default');
    }


    if (input && input !== localVariable1) {
      if (input && input !== localVariable2) {
        if (input && input !== localVariable3) {
          if (input && input !== localVariable4) {
            if (input && input !== localVariable5) {
              const localVariable6 = 6;
              const localVariable7 = 7;
              const localVariable8 = 8

              if (input && input !== localVariable6) {
                return 'Test congtivitive complexity rule #1';
              } else if (input && input !== localVariable7) {
                return 'Test congtivitive complexity rule #2';
              } else if (input && input !== localVariable8) {
                return  'Test congtivitive complexity rule #1';
              }
            }
          }
        }
      }
    }
}

testCognitiveRule();

if (1) {
  testCognitiveRule();
}

if (2) {
  testCognitiveRule();
}

const ins = new TestingRules();
ins.testCognitiveComplexityRule(1);

if (1 === 1) {
  console.log('More code to test');
}
