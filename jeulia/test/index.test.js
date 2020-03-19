import Jeulia from  '../src/index.ts'

test('new Jeulia', () => {
    const vm = new Jeulia({
        data:"555"
    });
    expect(vm.option.data).toBe("555")
});
