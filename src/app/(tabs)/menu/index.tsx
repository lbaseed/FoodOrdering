import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { FlatList } from "react-native";
import { Product } from "../../../types";

const product = products[0];

export default function MenuScreen() {
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => <ProductListItem product={item} />}
			numColumns={2}
			contentContainerStyle={{ gap: 10, padding: 10 }}
			columnWrapperStyle={{ gap: 10 }}
		/>
	);
}
