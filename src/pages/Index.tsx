import Icon from '@/components/ui/icon';

const Index = () => {
  const skills = [
    { name: 'Дизайн', level: 90 },
    { name: 'Разработка', level: 85 },
    { name: 'Маркетинг', level: 75 },
    { name: 'Аналитика', level: 80 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="min-h-screen flex items-center justify-center px-6 border-b border-border">
        <div className="max-w-4xl w-full text-center">
          <div className="fade-in-up">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
              Иван Иванов
            </h1>
          </div>
          
          <div className="fade-in-up-delay-1">
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Дизайнер и разработчик, создающий минималистичные цифровые решения
            </p>
          </div>
          
          <div className="fade-in-up-delay-2 mt-16">
            <button className="inline-flex items-center gap-2 text-sm tracking-wide uppercase border border-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Связаться
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24 border-b border-border">
        <div className="max-w-4xl w-full">
          <div className="mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">01</span>
            <h2 className="text-5xl md:text-6xl font-light mt-4 mb-12">Обо мне</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg font-light leading-relaxed mb-6 text-muted-foreground">
                Я создаю функциональные и эстетичные решения, где каждая деталь имеет значение. 
                Моя философия — меньше, но лучше.
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                В работе ценю простоту, внимание к деталям и стремление к совершенству. 
                Верю, что хороший дизайн невидим, но его отсутствие сразу заметно.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <Icon name="MapPin" size={20} className="mt-1 text-muted-foreground" />
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">Локация</p>
                  <p className="font-light">Москва, Россия</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <Icon name="Mail" size={20} className="mt-1 text-muted-foreground" />
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">Email</p>
                  <p className="font-light">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <Icon name="Briefcase" size={20} className="mt-1 text-muted-foreground" />
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">Опыт</p>
                  <p className="font-light">5+ лет в индустрии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full">
          <div className="mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">02</span>
            <h2 className="text-5xl md:text-6xl font-light mt-4 mb-12">Навыки</h2>
          </div>
          
          <div className="space-y-12">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-light tracking-wide">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground font-light">{skill.level}%</span>
                </div>
                <div className="h-px bg-border relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-border">
            <div className="text-center">
              <Icon name="Palette" size={32} className="mx-auto mb-4 text-muted-foreground" />
              <h4 className="text-sm tracking-wide uppercase mb-2">Дизайн</h4>
              <p className="text-sm font-light text-muted-foreground">UI/UX, Брендинг</p>
            </div>
            
            <div className="text-center">
              <Icon name="Code" size={32} className="mx-auto mb-4 text-muted-foreground" />
              <h4 className="text-sm tracking-wide uppercase mb-2">Разработка</h4>
              <p className="text-sm font-light text-muted-foreground">React, TypeScript</p>
            </div>
            
            <div className="text-center">
              <Icon name="Lightbulb" size={32} className="mx-auto mb-4 text-muted-foreground" />
              <h4 className="text-sm tracking-wide uppercase mb-2">Стратегия</h4>
              <p className="text-sm font-light text-muted-foreground">Продукт, Маркетинг</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-light text-muted-foreground">© 2024 Иван Иванов</p>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm font-light hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-sm font-light hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-sm font-light hover:text-primary transition-colors">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
