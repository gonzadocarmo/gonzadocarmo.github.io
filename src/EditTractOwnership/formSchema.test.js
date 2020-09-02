import schema from './formSchema';

describe('form schema validation', () => {
  describe('when validation passes', () => {
    it('should not throw any error', () => {
      const inputModel = {
        minerals: [
          {
            id: 'some-uuid',
            owner: 'the owner name',
            interest: 10,
            lease: 'some-lease',
            npris: [],
          },
        ],
      };
      expect(schema.validateSync(inputModel)).toBeTruthy();
    });
  });
  describe('when validation does NOT pass', () => {
    describe('when error w/ "minerals" field', () => {
      describe('and no field', () => {
        it('should throw "minerals is a required field" error', () => {
          expect.assertions(1);
          const inputModel = {};

          try {
            schema.validateSync(inputModel);
          } catch (error) {
            expect(error.message).toEqual('minerals is a required field');
          }
        });
      });
      describe('and field w/o items', () => {
        it('should throw "minerals is a required field" error', () => {
          expect.assertions(1);
          const inputModel = { minerals: [] };

          try {
            schema.validateSync(inputModel);
          } catch (error) {
            expect(error.message).toEqual('minerals is a required field');
          }
        });
      });
    });
    describe('when error w/ "owner" field', () => {
      describe('and no owner field', () => {
        it('should throw "minerals[0].owner is a required field" error', () => {
          expect.assertions(1);
          const inputModel = {
            minerals: [{ lease: 'some-lease', interest: 10 }],
          };

          try {
            schema.validateSync(inputModel);
          } catch (error) {
            expect(error.message).toEqual(
              'minerals[0].owner is a required field'
            );
          }
        });
      });
      describe('and empty owner field', () => {
        it('should throw "minerals[0].owner is a required field" error', () => {
          expect.assertions(1);
          const inputModel = {
            minerals: [{ owner: '', lease: 'some-lease', interest: 10 }],
          };

          try {
            schema.validateSync(inputModel);
          } catch (error) {
            expect(error.message).toEqual(
              'minerals[0].owner is a required field'
            );
          }
        });
      });
      describe('and owner field length > 20 chars', () => {
        it('should throw "minerals[0].owner must be at most 20 characters" error', () => {
          expect.assertions(1);
          const inputModel = {
            minerals: [
              {
                owner: 'this a very long name - not valid',
                lease: 'some-lease',
                interest: 10,
              },
            ],
          };

          try {
            schema.validateSync(inputModel);
          } catch (error) {
            expect(error.message).toEqual(
              'minerals[0].owner must be at most 20 characters'
            );
          }
        });
      });
    });
  });

  // similar test for other fields...
});
