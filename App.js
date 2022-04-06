import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require("./assets/nthati.jpg")}
      style={{height: 130, width: 130, borderRadius: 200/2}} 
      />
      <Text>Nthati Sello</Text>
      <Text>901013546</Text>
      <Text>BSCSM</Text>
      <Text>Y2S2</Text>
      <View style={styles.school}>
        <Text>Limkokwing university of Creative Technology</Text>
      </View>
      
      <ScrollView>
      <Text>Y1 SEMESTER 1</Text>
     
     <View style={styles.shape1}>
       <Text>     Computer skills                                     C </Text>
       <Text>     Principles of programming                 C </Text>
       <Text>     Algebra                                                   A </Text>
       <Text>     Fundamentals of Design                      B</Text>
       <Text>     Creative studies                                     B</Text>
       <Text>     Business communication                     C</Text>
     </View>
     <Text>Y1 SEMESTER 2</Text>
     <View style={styles.shape2}>
       <Text>     Introduction to database                      C </Text>
       <Text>     Calculus 1                                               A </Text>
       <Text>     Digital Imaging                                       B</Text>
       <Text>     Digital Graphics                                      B</Text>
       <Text>     Principles of Software Engineering     C</Text>
     </View>
     <Text>Y2 SEMESTER 1</Text>
     <View style={styles.shape3}>
       <Text>     Data communication                              A </Text>
       <Text>     Calculus 2                                                 A </Text>
       <Text>     Multimedia Technology                          B</Text>
       <Text>     Principles of Web Design                       B</Text>
       <Text>     c++ programming 1                                C</Text>
     </View>
     <Text>Y2 SEMESTER 2</Text>
     <View style={styles.shape4}>
       <Text>     Java programming 1                           NULL </Text>
       <Text>     Software modelling                             NULL </Text>
       <Text>     Database system                                 NULL</Text>
       <Text>     Probability and statistics                    NULL</Text>
       <Text>     c++ programming 2                            NULL</Text>
       <Text>     Mobile device programming             NULL</Text>
     </View>
     </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
    
    
  },

  shape1: {
    
    backgroundColor: 'chocolate',
    height: 118,
    width: 300,
    marginBottom: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  shape2: {
    
    backgroundColor: 'chocolate',
    height: 100,
    width: 300,
    marginBottom: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  shape3: {
    
    backgroundColor: 'chocolate',
    height: 100,
    width: 300,
    marginBottom: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  shape4: {
    
    backgroundColor: 'chocolate',
    height: 118,
    width: 300,
    marginBottom: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  school: {
    height: 50,
    width: 300,
    marginBottom: 30,
    backgroundColor: 'chocolate',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }

 
});
