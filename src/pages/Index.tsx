
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка сайта */}
      <header className="sticky top-0 bg-white border-b z-10">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <Icon name="Store" className="h-5 w-5 text-purple-600 mr-2" />
            <span className="font-semibold text-lg">МойМаркет</span>
          </div>

          {/* Поисковая строка */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Поиск товаров..."
                className="pr-10 w-full rounded-md border-gray-200 bg-white"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Icon name="Search" className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Навигация и кнопки */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="Percent" className="h-5 w-5 mr-1.5" />
              <span>Акции</span>
            </Button>

            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="Heart" className="h-5 w-5 mr-1.5" />
              <span>Избранное</span>
            </Button>

            {/* Кнопка аккаунта */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Аккаунт"
            >
              <Icon name="User" className="h-5 w-5 text-gray-700" />
            </Button>

            {/* Кнопка входа */}
            <Button className="bg-purple-600 hover:bg-purple-700">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main>
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Делайте покупки с комфортом
              </h1>
              <p className="text-gray-600 mb-6">
                Широкий ассортимент товаров по лучшим ценам с доставкой по всей России
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Каталог товаров
                </Button>
                <Button variant="outline">
                  Специальные предложения
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-200 rounded-lg overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-12 text-blue-500 font-bold text-5xl">10% OFF</div>
                    <div className="absolute top-1/3 right-1/3 transform rotate-6 text-purple-500 font-bold text-4xl">SALE</div>
                    <div className="absolute bottom-1/3 left-1/3 transform -rotate-12 text-blue-600 font-bold text-3xl">30% OFF</div>
                    <div className="absolute bottom-1/2 right-1/2 transform rotate-45 text-pink-600 font-bold text-5xl">50%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
