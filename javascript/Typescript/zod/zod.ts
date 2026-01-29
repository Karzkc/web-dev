// src/zod-complete.ts - ALL ZOD FEATURES IN ONE FILE
import { z } from "zod";

// ======================================
// 1. PRIMITIVES
// ======================================
const emailSchema = z.string().email("Invalid email");
const nameSchema = z.string().min(2, "Too short").max(50, "Too long");
const ageSchema = z.number().int().positive().min(1, "Min age 1");
const boolSchema = z.boolean();

// Coercion (convert strings to types)
const coerceAge = z.coerce.number();
const coerceBool = z.coerce.boolean();

// ======================================
// 2. LITERALS & ENUMS
// ======================================
const statusSchema = z.enum(["draft", "published", "archived"]);
const roleSchema = z.literal("admin").or(z.literal("user"));
type Status = z.infer<typeof statusSchema>; // "draft" | "published" | "archived"

// ======================================
// 3. OBJECTS
// ======================================
const userSchema = z.object({
  id: z.number(),
  name: nameSchema,
  email: emailSchema,
  age: ageSchema.optional(),
  isActive: boolSchema.default(true),
  role: roleSchema,
  status: statusSchema,
});

type User = z.infer<typeof userSchema>; // ✅ Full TS type inferred

// Strict object (no extra fields)
const strictUser = userSchema.strict();

// Partial (all optional)
const partialUser = userSchema.partial();

// ======================================  
// 4. ARRAYS & UNIONS
// ======================================
const usersSchema = z.array(userSchema);
const userOrAdmin = z.union([userSchema, z.object({ role: z.literal("admin") })]);

// ======================================
// 5. TRANSFORMATIONS & DEFAULTS
// ======================================
const trimmedEmail = z.string().transform((val) => val.trim().toLowerCase());
const fullNameSchema = z.object({
  first: z.string(),
  last: z.string(),
}).transform((val) => `${val.first} ${val.last}`);

// Defaults
const userWithDefaults = userSchema.pick({ isActive: true, status: true }).default({
  isActive: true,
  status: "draft",
});

// ======================================
// 6. NESTED OBJECTS
// ======================================
const addressSchema = z.object({
  street: z.string().min(5),
  city: z.string(),
  zip: z.string().regex(/^\d{5}$/, "Invalid ZIP"),
});

const fullUserSchema = userSchema.extend({
  address: addressSchema,
  tags: z.array(z.string()).max(10),
});

// ======================================
// 7. LIVE TESTING - RUN THIS!
// ======================================

console.log("=== 1. PRIMITIVES ===");
console.log("✅ Email:", emailSchema.parse("test@example.com"));
console.log("❌ Bad email:", emailSchema.safeParse("invalid"));

console.log("\n=== 2. OBJECT VALIDATION ===");
const goodUser: unknown = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  role: "user" as any,
  status: "published",
};

const result = userSchema.safeParse(goodUser);
if (result.success) {
  console.log("✅ Good user:", result.data);
} else {
  console.log("❌ Errors:", result.error.issues);
}

// Bad data test
const badUser = { name: "A", email: "bad", age: -5 };
try {
  userSchema.parse(badUser);
} catch (error) {
  console.log("❌ Caught errors:", (error as z.ZodError).issues);
}

console.log("\n=== 3. TRANSFORMATIONS ===");
console.log("Transform email:", trimmedEmail.parse("  TEST@GMAIL.COM  "));
console.log("Full name:", fullNameSchema.parse({ first: "Jane", last: "Doe" }));

console.log("\n=== 4. ARRAYS ===");
const users = [{ id: 1, name: "Alice", email: "alice@test.com" }];
console.log("Users array:", usersSchema.parse(users));

console.log("\n=== 5. NESTED OBJECTS ===");
const fullUser = {
  id: 1,
  name: "Bob",
  email: "bob@test.com",
  address: { street: "123 Main", city: "NYC", zip: "10001" },
  tags: ["dev", "ts"],
};
console.log("Full user:", fullUserSchema.parse(fullUser));

console.log("\n=== 6. TYPE INFERENCE ===");
const user: User = {
  id: 1,
  name: "Type checked!",
  email: "type@example.com",
  isActive: true,
  role: "user",
  status: "draft",
}; // ✅ TS will catch errors here!

console.log("\n=== 7. SAFE PARSE EVERYWHERE ===");
const apiData: unknown = { name: "Safe", email: "safe@test.com", extra: "ignored" };
const safeResult = strictUser.safeParse(apiData);
console.log("Strict parse:", safeResult.success ? "✅ Passed" : "❌ Failed: " + safeResult.error.message);
