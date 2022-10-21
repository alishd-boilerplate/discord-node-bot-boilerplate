/**
 * Jest Tests
 * =====================
 *
 * Ali Shadman [@alishd] <alishadman955@gmail.com> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
test("show hello world", async () => {
	const app = () => "hello-world";
	expect(app()).toBe("hello-world");
});
