# Zadanie rekrutacyjne

## 1. Stwórz oddzielny dummy komponent <app-user-item>, wyświetlający imię i nazwisko usera oraz jego adres email.

## 2. Stwórz nowy komponent będący formularzem dodawania kontaktu
Formularz powinien zawierać pola:
  * wyboru użytkownika, dla którego tworzymy kontakt (select) - pokazujemy imię  nazwisko użytkownika
  * imię oraz nazwisko
  * email

## 3. Dodaj customowy walidator do pola email, tak aby sprawdzał poprawnpść adresu. Email nie może być z domeny `prowly.com`, a dodatkowo nie chcemy by zwierał w sobie tag, czyli znak `+`.
## 4. W widoku głównym mamy listę userów - kliknięcie na jednego z nich powinno przenieść do widoku formularza i ustawionym wybranym wcześniej użytkownikiem.

## 5. Na liście obok imienia i nazwiska chcemy wyświetlić dodatkowo numer telefonu, który dostępny jest w oddzielnym streamie (getProfiles), stwórz jeden stream, który wzbogaci usera o atrybut profil (patrz interfejs IUserWithProfile).

## 6. Komponent z formularzem przenieś do oddzielnego lazy-loadowanego modułu.
