import axios from 'axios';
const api = axios.create({ baseURL: '/api', timeout: 10000 });
export function errorText(error) {
  if (!error.response) return 'Сервер недоступен. Запустите npm run api и повторите действие.';
  const data = error.response.data;
  const messages = { 'Email already exists': 'Этот email уже зарегистрирован.', 'Cannot find user': 'Неверный email или пароль.', 'Incorrect password': 'Неверный email или пароль.', 'Password is too short': 'Пароль слишком короткий.' };
  return messages[data] || (typeof data === 'string' && /[а-яА-Я]/.test(data) ? data : 'Не удалось выполнить запрос.');
}
export default api;
