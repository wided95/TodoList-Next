"use client";
import CardList from "@/components/ui/CardList";
import Navbar from "@/components/ui/Navbar";
import store from "@/redux/store/store";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
    <main className=" w-full h-full bg-custom1 flex items-center justify-center flex-col gap-8 p-5">
      <Navbar />
      <CardList/>
    </main>
    </Provider>
  );
}