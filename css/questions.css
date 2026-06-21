@charset "utf-8";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
}

.faq-wrapper {
    max-width: 1200px;
    margin: 30px auto 50px auto;
    padding: 0 20px;
}

.page-header {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 25px 30px;
    margin-bottom: 25px;
    border: 1px solid rgba(255, 217, 102, 0.25);
}

.page-header h1 {
    color: #ffd966;
    font-size: 1.5rem;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.page-header h1 svg {
    stroke: #ffd966;
}

.page-header p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
}

.search-bar {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 15px 20px;
    margin-bottom: 25px;
    border: 1px solid rgba(255, 217, 102, 0.2);
}

.search-box {
    max-width: 400px;
    position: relative;
}

.search-box input {
    width: 100%;
    padding: 10px 18px;
    border: 1px solid rgba(255, 217, 102, 0.3);
    border-radius: 30px;
    font-size: 13px;
    padding-right: 40px;
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.search-box input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.search-box input:focus {
    border-color: #ffd966;
    background: rgba(255, 255, 255, 0.1);
}

.search-icon-pos {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    pointer-events: none;
    stroke: rgba(255, 255, 255, 0.5);
}

#faqContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
}

.faq-item {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 217, 102, 0.15);
    transition: all 0.3s ease;
    animation: slideUpFade 0.5s ease-out forwards;
    opacity: 0;
}

@keyframes slideUpFade {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.faq-item:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 217, 102, 0.35);
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    cursor: pointer;
    background: transparent;
    transition: 0.3s ease;
}

.faq-question:hover {
    background: rgba(255, 217, 102, 0.05);
}

.question-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
}

.question-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    stroke: #ffd966;
}

.toggle-icon {
    width: 20px;
    height: 20px;
    stroke: #ffd966;
    stroke-width: 2.5;
    transition: transform 0.3s ease;
    flex-shrink: 0;
}

.faq-item.open .toggle-icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    background: rgba(255, 255, 255, 0.03);
    border-top: 1px solid transparent;
}

.faq-item.open .faq-answer {
    max-height: 500px;
    border-top-color: rgba(255, 217, 102, 0.1);
}

.answer-content {
    padding: 18px 20px;
    font-size: 14px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
}

.answer-content ul {
    padding-right: 20px;
    margin: 10px 0;
}

.answer-content ul li {
    margin-bottom: 6px;
}

.answer-content strong {
    color: #ffd966;
}

.answer-content .highlight {
    background: rgba(255, 217, 102, 0.15);
    padding: 2px 8px;
    border-radius: 6px;
    color: #ffd966;
}

.empty-state {
    text-align: center;
    padding: 50px 20px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    border: 1px solid rgba(255, 217, 102, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
}

.toast-msg {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #2d6a3f;
    color: white;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 13px;
    z-index: 10001;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}

.toast-msg.show {
    opacity: 1;
    visibility: visible;
}

.toast-msg.error {
    background: #c0392b;
}

@media (max-width: 768px) {
    .faq-wrapper {
        padding: 0 15px;
        margin-top: 20px;
    }
    
    .page-header {
        padding: 20px;
        border-radius: 18px;
    }
    
    .page-header h1 {
        font-size: 1.2rem;
    }
    
    .search-bar {
        padding: 12px 16px;
        border-radius: 16px;
    }
    
    .search-box {
        max-width: 100%;
    }
    
    #faqContainer {
        gap: 10px;
    }
    
    .faq-question {
        padding: 14px 16px;
    }
    
    .question-title {
        font-size: 0.95rem;
        gap: 10px;
    }
    
    .question-icon {
        width: 20px;
        height: 20px;
    }
    
    .toggle-icon {
        width: 18px;
        height: 18px;
    }
    
    .answer-content {
        padding: 16px 16px;
        font-size: 13px;
        line-height: 1.8;
    }
}

@media (max-width: 480px) {
    .page-header h1 {
        font-size: 1rem;
    }
    
    .page-header p {
        font-size: 0.75rem;
    }
    
    #faqContainer {
        gap: 8px;
    }
    
    .faq-question {
        padding: 12px 14px;
    }
    
    .question-title {
        font-size: 0.85rem;
        gap: 8px;
    }
    
    .question-icon {
        width: 18px;
        height: 18px;
    }
    
    .toggle-icon {
        width: 16px;
        height: 16px;
    }
    
    .answer-content {
        padding: 12px 14px;
        font-size: 12px;
        line-height: 1.7;
    }
    
    .search-bar {
        padding: 10px 12px;
    }
    
    .search-box input {
        font-size: 12px;
        padding: 8px 14px;
        padding-right: 35px;
    }
    
    .search-icon-pos {
        width: 14px;
        height: 14px;
    }
    
    .toast-msg {
        font-size: 12px;
        padding: 10px 18px;
        width: 90%;
        text-align: center;
    }
}
