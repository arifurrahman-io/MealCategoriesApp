import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({route}){
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal)=>meal.id===mealId);

return (
    <View>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <Text>{selectedMeal.title}</Text>
        
        <View>
            <Text>duration={selectedMeal.duration}</Text>
            <Text>complexity={selectedMeal.complexity}</Text>
            <Text>affordability={selectedMeal.affordability}</Text>
        </View>
        
        
        
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient)=>(
            <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {
            selectedMeal.steps.map((step)=>(
                <Text key={step}>{step}</Text>
            ))
        }
    </View>
)
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
      },
})