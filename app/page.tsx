import { Button, TextInput } from "flowbite-react";

export default function Home() {
  return <>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <Button>play</Button>
    <TextInput type="number"></TextInput>
  </>;
}