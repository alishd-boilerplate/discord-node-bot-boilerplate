/**
 * Jest Tests
 * =====================
 *
 * Ali Shadman [@alishd] <support@@alishd.dev> (https://alishd.dev)
 *
 * @license: MIT License
 *
 */
test("show hello world", async () => {
	const app = () => "hello-world";
	expect(app()).toBe("hello-world");
});
