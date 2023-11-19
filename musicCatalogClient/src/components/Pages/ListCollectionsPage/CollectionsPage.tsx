import { useEffect, useMemo, useState } from "react";
import { ICollectionSongs } from "../../../types/typesObj";
import { ToolbarComponent } from "../../Toolbar/Toolbar"
import { GetCollections } from "../../../requests/getCollections";
import { SearchComponent } from "../../SearchComponent";
import { ListCollections } from "../../ListCollections/ListCollections";

export const CollectionsPage = () => {
    const [listCollections, setListCollections] = useState<ICollectionSongs[]>([]);
    const [filterText, setFilterText] = useState("");

    const filteredListCollections: ICollectionSongs[] = useMemo(()=>{
        return listCollections.filter((collection) => 
            collection.NameCollection.toLowerCase().includes(filterText.toLowerCase().trim())
        )
    },[listCollections, filterText])

    useEffect(()=>{
        GetCollections().then((res)=>{
            setListCollections(res);
        });
    },[]);

    return (
        <>
            <ToolbarComponent title="Сборники"/>
            <SearchComponent filterText={filterText} onChangeText={setFilterText} />
            <ListCollections listCollections={filteredListCollections} />
        </>
    )
}