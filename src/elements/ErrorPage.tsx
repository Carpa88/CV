import { Typography } from "@mui/material"
import Section from "./Section"

const ErrorPage = (status: number) => {

	const error_message: () => string = () => {
		switch (status) {
			case 404: return 'Увы, такой страницы больше нет'
			case 500: return 'Сервис недоступен'
			default: return'Сами не понимаем, что случилось, но сайт не работает. Уже бежим его чинить'
		}
	}

	return (
		<Section title='Ой-ой. Произошла ошибка.'>
			<Typography variant="h3">{error_message()}</Typography>
		</Section>
		)
}

export default ErrorPage;