import AppRouting from './AppRouting';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <QuizProvider>
      <AppRouting />
    </QuizProvider>
  );
}

export default App;
