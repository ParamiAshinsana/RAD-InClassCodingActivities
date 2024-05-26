import GDSEButton from "../../components/Button";
import Titles from "../../components/Title";
import TextField from "../../components/TextField";

export default function Customer() {
  return (
    <>
     <Titles name="customer manage" />
     <Titles name="item manage" />

      <GDSEButton btnName="save" btnColor="bg-blue-500" hoverEffect=" hover:bg-blue-700" />
      <GDSEButton btnName="update" btnColor="bg-orange-500" hoverEffect=" hover:bg-orange-700" />
      <GDSEButton btnName="delete" btnColor="bg-red-500" hoverEffect=" hover:bg-red-700"/>
   
   <TextField abc="customer id" />
   <TextField abc="customer name" />

   <Titles name="place order manage" />

    </>
  );
}