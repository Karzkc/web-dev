import { z } from "zod";
import { StringSchema } from "zod/v4/core/json-schema.cjs";

// z.string()
// Defines a schema that validates string values only.
const strSchema = z.string();
let a:StringSchema;



// z.number()
// Defines a schema that validates number values only.
const numSchema = z.number();

// z.boolean()
// Defines a schema that validates boolean values only.
const boolSchema = z.boolean();

// z.object({...})
// Defines a schema for an object with specified fields and type validations.
const userSchema = z.object({
  name: z.string(),      // Ensures 'name' is a string.
  age: z.number(),       // Ensures 'age' is a number.
  email: z.string().email(), // Ensures 'email' is a valid email.
});

// z.array(schema)
// Validates that the value is an array of items that match the provided schema.
const arrSchema = z.array(z.string());

// z.enum([...])
// Defines a schema that validates values as one of the listed enum strings.
const colorEnum = z.enum(["red", "green", "blue"]);

// z.union([schemaA, schemaB])
// Creates a schema that accepts values matching any one of the provided schemas.
const phoneSchema = z.union([z.string(), z.number()]);

// z.literal(value)
// Validates that the value is exactly equal to the provided literal value.
const literalTrue = z.literal(true);

// z.parse(data)
// Runs validation and returns the parsed value if valid, throws error otherwise.
userSchema.parse({ name: "Alice", age: 25, email: "a@b.com" });

// z.safeParse(data)
// Like .parse(), but returns an object with success/error info (does not throw).
const result = userSchema.safeParse({ name: "Bob", age: 28, email: "bob@me.com" });
// result.success will indicate valid/invalid, and result.data or result.error is returned accordingly.

// .optional()
// Makes a field optional in an object or allows undefined for the schema.
const optionalSchema = z.string().optional();

// .min(value, message?), .max(value, message?)
// Used for string, number, or array schemas; validates minimum/maximum length or value.
const nameSchema = z.string().min(3, "Name must be at least 3 chars");

// .refine(checkFn, message?)
// Adds custom validation logic using a function.
const evenSchema = z.number().refine((n) => n % 2 === 0, "Must be even");

// .transform(fn)
// Transforms the validated data using a function, useful for value modifications.
const trimmedSchema = z.string().transform((s) => s.trim());

// .default(value)
// Provides a default value if none is supplied for .optional() fields.
const defaultSchema = z.string().optional().default("default value");

// .partial()
// Makes all fields of an object schema optional (like TypeScript's Partial).
const partialUserSchema = userSchema.partial();

// .pick({ ... })
// Creates a new object schema with only the listed keys.
const pickedUserSchema = userSchema.pick({ name: true });

// .omit({ ... })
// Creates a new object schema excluding the listed keys.
const omittedUserSchema = userSchema.omit({ age: true });

// .extend({ ... })
// Adds new fields or overrides existing fields in an object schema.
const extendedUserSchema = userSchema.extend({ phone: z.string().optional() });

// z.infer<typeof schema>
// Extracts TypeScript type from a Zod schema for static typing.
type UserType = z.infer<typeof userSchema>;
