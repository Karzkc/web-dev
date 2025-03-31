// Type Aliases in TypeScript

// A Type Alias in TypeScript allows you to create a custom name for a type. It's useful for making complex types more readable and reusable.

type characters = string
type conditional = boolean

let a : characters = "Hello, TypeScript!"
let b : conditional = true

// If it seems very useless to create multiple aliases for the same type, but it is useful when you have a complex type or a union type.

// For example, you can create a type alias for a union type:

type values = string | number | boolean
let c : values = "Hello"
let d : values = 42
let e : values = true

// we can also put custom type values in the type alias:
type success_msg = "success"|"failure"|"pending"
let f : success_msg = "success"