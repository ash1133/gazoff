window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.dataset.src)
                    entry.target.src = entry.target.dataset.src

                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('img').forEach(img => observer.observe(img))
}