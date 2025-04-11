import { Button as UntypedButton, TextInput } from "flowbite-react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = UntypedButton as unknown as React.FC<any>; // Hacky workaround

export {
    Button,
    TextInput
}
