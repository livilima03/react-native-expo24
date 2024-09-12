import { createContext } from "react";
import { createContex, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({})

export function FontProvider({children}){
 const [loaded, error] = useFonts({
       regular: require("../../assets/fonts/Montserrat-Regular.tff"),
       bold: require("../../assets/fonts/Montserrat-Bold.tff"),
       black: require("../../assets/fonts/Montserrat-Black.tff"),
       semibold: require("../../assets/fonts/Montserrat-SemiBold.tff"),
       light: require("../../assets/fonts/Montserrat-Ligth.tff"),
       medium: require("../../assets/fonts/Montserrat-Medium.tff"),
       thin: require("../../assets/fonts/Montserrat-Thin.tff"),
       extralight: require("../../assets/fonts/Montserrat-ExtraLight.tff"),
       italic: require("../../assets/fonts/Montserrat-Italic.tff"),
       bolditalic: require("../../assets/fonts/Montserrat-BoldItalic.tff"),
       blackitalic: require("../../assets/fonts/Montserrat-BlackItalic.tff"),
});

 if (!loaded && !error) {
   return 
   <View style={{flex: 1, justifyContent: "center", alingItems: "center" }}>
     <Text style={{ fontSize: 28, marginTop: 15}} >
        Carregando as Fontes
        </Text>
     <ActivityIndicator size="large" color="0000ff"/>
   </View>;
 }

return <FontContext.Provider value={{loaded}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont  must be used within a FontProvider")
    }
    return context;
}