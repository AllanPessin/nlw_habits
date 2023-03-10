import { View, Text, ScrollView } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDates } from '../utils/generateDates';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const dateFromYearStart = generateDates();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - dateFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 py-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text key={index}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {
            dateFromYearStart.map(date => (
              <HabitDay key={date.toISOString()} />
            ))
          }
          <>
            {
              amountOfDaysToFill > 0 && Array
                .from({ length: amountOfDaysToFill })
                .map((_, index) => {
                  <View
                    className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                    style={{ width: DAY_SIZE, height: DAY_SIZE }}
                  />
                })
            }
          </>
        </View>
      </ScrollView>
    </View>
  )
}