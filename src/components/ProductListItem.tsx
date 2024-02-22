import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
	"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
type ProductListItemProps = {
	product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link href={`/(tabs)/menu/${product.id}`} asChild>
			<Pressable style={styles.container}>
				<Image
					source={{ uri: product?.image || defaultPizzaImage }}
					style={styles.productImage}
					resizeMode="contain"
				/>
				<Text style={styles.title}>{product?.name}</Text>
				<Text style={styles.price}>$ {product?.price}</Text>
			</Pressable>
		</Link>
	);
};

export default ProductListItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 20,
		flex: 1,
		maxWidth: "50%"
	},
	title: {
		fontSize: 20,
		fontWeight: "600",
		marginVertical: 10
	},
	price: {
		color: Colors.light.tint,
		fontWeight: "bold"
	},
	productImage: {
		width: "100%",
		aspectRatio: 1
	}
});
