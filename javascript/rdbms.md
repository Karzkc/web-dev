# Entity Sets and Attributes

## Weak Entity Set

An entity set that **does not contain any unique attribute** or unique column is called a Weak Entity Set. It relies on another entity (owner entity) for uniqueness.

---

## Attribute Types

### 1. Key Attribute

- **Definition**: A unique attribute that distinguishes one entity from another.
- **ER Diagram Notation**: Underlined attribute name
- **Example**:
STUDENT
PRN (Key)
Name
Course_Code


### 2. Composite Attribute

- **Definition**: An attribute composed of multiple sub-attributes.
- **ER Diagram Notation**: Hierarchically connected ovals
- **Examples**:

PRN
├── Batch Year
├── College Code
├── Course Code
└── Roll No.

Name
├── First Name
├── Middle Name
└── Last Name

Address
├── Street Name
├── House No.
├── Area Name
├── City
├── State
└── Country


### 3. Multivalued Attribute

- **Definition**: An attribute that can store multiple values.
- **ER Diagram Notation**: Double oval
- **Example**:
STUDENT
PRN
Name
Mobile_No (Double Oval)

A student may have multiple mobile numbers.

### 4. Derived Attribute

- **Definition**: An attribute derived from another attribute.
- **ER Diagram Notation**: Dashed oval
- **Example**:
STUDENT
PRN
DOB
Age (Dashed Oval)

**Age** is calculated from **Date of Birth (DOB)**.

---

## ER Diagram Notations Summary

| Attribute Type        | Notation        |
|-----------------------|-----------------|
| Key Attribute         | Underlined Text |
| Composite Attribute   | Nested Ovals    |
| Multivalued Attribute | Double Oval     |
| Derived Attribute     | Dashed Oval     |