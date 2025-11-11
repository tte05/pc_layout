const sendForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Создаём объект FormData
    const formData = new FormData(form);

    // Преобразуем FormData в обычный объект
    const sendObj = Object.fromEntries(formData.entries());

    // Проверяем, что все поля заполнены
    if (
      !sendObj.name.trim() ||
      !sendObj.phone.trim() ||
      !sendObj.email.trim()
    ) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(sendObj),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log("Ответ сервера:", result);

      alert("✅ Спасибо! Ваша заявка успешно отправлена.");

      // Очистка формы после успешной отправки
      form.reset();
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("⚠️ Произошла ошибка при отправке данных. Попробуйте позже.");
    } finally {
      console.log("Форма обработана.");
    }
  });
};

sendForm();