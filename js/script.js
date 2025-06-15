// 스크롤 애니메이션
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// 스무스 스크롤
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 헤더 높이 고려
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 모바일 메뉴 토글
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-active');
        });
    }
}

// 헤더 스크롤 효과
function setupHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
        }
    });
}

// 숫자 카운트 애니메이션
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                const isPercentage = finalNumber.includes('%');
                const isPlusSign = finalNumber.includes('+');
                const numericValue = parseInt(finalNumber.replace(/[^0-9]/g, ''));
                
                let current = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(timer);
                    }
                    
                    let displayValue = Math.floor(current).toLocaleString();
                    if (isPercentage) displayValue += '%';
                    if (isPlusSign) displayValue += '+';
                    
                    target.textContent = displayValue;
                }, 30);
                
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(number => observer.observe(number));
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', handleScrollAnimation);
    
    // 초기 애니메이션 체크
    handleScrollAnimation();
    
    // 스무스 스크롤 설정
    smoothScroll();
    
    // 모바일 메뉴 설정
    setupMobileMenu();
    
    // 헤더 스크롤 효과
    setupHeaderScroll();
    
    // 숫자 애니메이션
    animateNumbers();
});

// 윈도우 리사이즈 이벤트
window.addEventListener('resize', function() {
    // 모바일 메뉴 닫기
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.remove('mobile-active');
    }
});

// 폼 제출 처리 (예시)
function handleFormSubmit() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 여기에 실제 폼 제출 로직 추가
            alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        });
    });
}

// FAQ 토글 기능
function setupFAQToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            
            // 모든 답변 숨기기
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // 클릭한 질문의 답변만 토글
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
}

// 폼 제출 처리 (예시)
function handleFormSubmit() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 여기에 실제 폼 제출 로직 추가
            alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            
            // 폼 초기화
            this.reset();
        });
    });
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmit();
    setupFAQToggle();
});