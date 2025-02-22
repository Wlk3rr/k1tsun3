document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
                content.style.maxHeight = 0;
            } else {
                document.querySelectorAll('.accordion-content').forEach((el) => {
                    el.style.display = "none";
                    el.style.maxHeight = 0;
                });
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
