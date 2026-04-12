describe("function: getGreeting()", function() {

	it ("check SpecialPromotion field", function() {
		expect(getGreeting("Sergey Novikov")).toBe("Hello, Sergey Novikov!");
	});

});
