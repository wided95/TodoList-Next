import AddTaskButton from "@/components/ui/AddTaskButton";
import CardList from "@/components/ui/CardList";
import InputSearch from "@/components/ui/InputSearch";
import ModalAdd from "@/components/ui/ModalAdd";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className=" w-full h-full bg-custom1 flex items-center justify-center flex-col gap-8 p-5">
      <Navbar />
      <div className="flex items-center justify-between w-3/6">
        <InputSearch />
        <AddTaskButton>+add</AddTaskButton>
      </div>
      <CardList/>
    </main>
  );
}
