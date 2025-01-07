- Never use `any`.
- In case there's no alternative, use `unknown` ([more about `unknown`](https://github.com/Microsoft/TypeScript/pull/24439)).
- Use ReadOnly arrays to ensure there's no scope for mutation (unless mutation is needed).

```
const numbers: ReadonlyArray<number> = [1, 2, 3];
```

- Array generics over typecasting.

```
const numbers: Array<number>;
//instead of const numbers: any[];
```

- Use interfaces over types for better extensibility.
- TS util types:

```
interface Person {
  name: string;
  age: number;
  address: string;
}

type PartialPerson = Partial<Person>; // Makes all properties optional
type PersonName = Pick<Person, 'name'>; // Extracts a subset of properties
type PersonWithoutAge = Omit<Person, 'age'>; // Removes a property

//For enums, we use Exclude
enum fruits {
  "apple",
  "orange",
  "marshmellow".
  "lemon"
}

type vitaminCFruits = Exclude<fruits, "apple">;
```

- Nullish coalescing operator over ternary operator at times.

```
const url = props.baseurl?props.baseurl:"";
//instead:
const url = props.baseurl ?? "";
```

- Always try to have function return type set:

```
async function sum(a: number, b: number): Promise<number> {...}
```

- Remember, `Promise.all` is all-or-nothing. If any promise fails, the whole thing fails.
  If you want all Promises to be proccessed (both resolved and failed), use `Promise.allSettled()`.
