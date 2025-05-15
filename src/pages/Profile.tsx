
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const [user] = useState({
    name: "Александр Иванов",
    email: "alex@example.com",
    phone: "+7 (999) 123-45-67",
    avatar: "https://cdn.poehali.dev/files/2fb1af60-a2af-4b7b-818f-0a655c4d1323.jpg",
    registered: "Май 2024",
    orders: [
      { id: "МК-23472", date: "15.05.2024", status: "Доставлен", total: "4 500 ₽" },
      { id: "МК-22981", date: "03.04.2024", status: "Доставлен", total: "2 200 ₽" },
      { id: "МК-21854", date: "15.03.2024", status: "Доставлен", total: "3 700 ₽" },
    ],
    addresses: [
      { id: 1, title: "Дом", address: "г. Москва, ул. Ленина, д. 42, кв. 56", default: true },
      { id: 2, title: "Работа", address: "г. Москва, ул. Пушкина, д. 10, офис 205", default: false },
    ],
    favorites: [
      { id: 1, name: "Смартфон Galaxy S24", price: "89 999 ₽", image: "https://unsplash.com/photos/KJ7Z-WGQL3I/download?force=true&w=640" },
      { id: 2, name: "Наушники TWS Pro", price: "12 990 ₽", image: "https://unsplash.com/photos/AFDDV0e-63o/download?force=true&w=640" },
      { id: 3, name: "Умные часы Watch 6", price: "24 990 ₽", image: "https://unsplash.com/photos/oXV3bzR7jQI/download?force=true&w=640" },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка сайта (такая же, как на главной) */}
      <header className="sticky top-0 bg-white border-b z-10">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Логотип */}
          <a href="/" className="flex items-center">
            <Icon name="Store" className="h-5 w-5 text-purple-600 mr-2" />
            <span className="font-semibold text-lg">МойМаркет</span>
          </a>

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

            {/* Кнопка аккаунта с индикатором активности */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors relative"
              aria-label="Аккаунт"
            >
              <Icon name="User" className="h-5 w-5 text-purple-600" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент профиля */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Шапка профиля */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24 border-2 border-purple-200">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-lg bg-purple-100 text-purple-600">
                  {user.name.split(' ').map(name => name[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200 self-center md:self-auto">
                    Активный клиент
                  </Badge>
                </div>
                <p className="text-gray-500 mb-1">Email: {user.email}</p>
                <p className="text-gray-500 mb-3">Телефон: {user.phone}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Icon name="Edit" className="h-4 w-4 mr-1" />
                    Редактировать профиль
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="LogOut" className="h-4 w-4 mr-1" />
                    Выйти
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block bg-gray-50 rounded-lg p-4 text-center min-w-[180px]">
                <p className="text-gray-500 text-sm mb-1">С нами с</p>
                <p className="font-medium">{user.registered}</p>
                <Separator className="my-3" />
                <p className="text-gray-500 text-sm mb-1">Всего заказов</p>
                <p className="font-medium">{user.orders.length}</p>
              </div>
            </div>
          </div>

          {/* Вкладки профиля */}
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="orders">
                <Icon name="ShoppingBag" className="h-4 w-4 mr-2 md:mr-2" />
                <span className="hidden sm:inline">Заказы</span>
              </TabsTrigger>
              <TabsTrigger value="addresses">
                <Icon name="MapPin" className="h-4 w-4 mr-2 md:mr-2" />
                <span className="hidden sm:inline">Адреса</span>
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Icon name="Heart" className="h-4 w-4 mr-2 md:mr-2" />
                <span className="hidden sm:inline">Избранное</span>
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Icon name="Settings" className="h-4 w-4 mr-2 md:mr-2" />
                <span className="hidden sm:inline">Настройки</span>
              </TabsTrigger>
            </TabsList>

            {/* Содержимое вкладки "Заказы" */}
            <TabsContent value="orders" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>История заказов</CardTitle>
                  <CardDescription>
                    Просмотр всех ваших прошлых заказов и их статусов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 bg-muted/50 p-3 font-medium">
                      <div>Номер</div>
                      <div>Дата</div>
                      <div>Статус</div>
                      <div>Сумма</div>
                    </div>
                    <div className="divide-y">
                      {user.orders.map((order) => (
                        <div key={order.id} className="grid grid-cols-4 p-3 hover:bg-muted/50">
                          <div className="font-medium text-purple-600">{order.id}</div>
                          <div>{order.date}</div>
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                              {order.status}
                            </Badge>
                          </div>
                          <div>{order.total}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <Icon name="Download" className="h-4 w-4 mr-2" />
                    Скачать историю
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Содержимое вкладки "Адреса" */}
            <TabsContent value="addresses" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Адреса доставки</CardTitle>
                      <CardDescription>
                        Управление адресами доставки для ваших заказов
                      </CardDescription>
                    </div>
                    <Button size="sm">
                      <Icon name="Plus" className="h-4 w-4 mr-2" />
                      Добавить
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user.addresses.map((address) => (
                    <div key={address.id} className="flex items-start justify-between bg-gray-50 p-4 rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{address.title}</h3>
                          {address.default && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                              По умолчанию
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600">{address.address}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Icon name="Pencil" className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                          <Icon name="Trash" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Содержимое вкладки "Избранное" */}
            <TabsContent value="favorites" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Избранные товары</CardTitle>
                  <CardDescription>
                    Товары, которые вы добавили в избранное
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {user.favorites.map((item) => (
                      <div key={item.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                        <div className="aspect-square bg-gray-100 relative">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="object-cover w-full h-full"
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-red-500"
                          >
                            <Icon name="Heart" className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm mb-1 line-clamp-2">{item.name}</h3>
                          <p className="font-bold text-purple-600">{item.price}</p>
                        </div>
                        <div className="px-3 pb-3">
                          <Button size="sm" className="w-full">
                            <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Содержимое вкладки "Настройки" */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки аккаунта</CardTitle>
                  <CardDescription>
                    Управление личными данными и настройками безопасности
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Личные данные</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Полное имя</Label>
                        <Input id="fullName" defaultValue={user.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" defaultValue={user.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthday">Дата рождения</Label>
                        <Input id="birthday" type="date" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Безопасность</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Текущий пароль</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Новый пароль</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Уведомления</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Уведомления о заказах</p>
                        <p className="text-sm text-gray-500">Получать уведомления о статусе заказов</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="bg-purple-100 hover:bg-purple-200 border-purple-200 text-purple-600">
                          Email
                        </Button>
                        <Button variant="outline" size="sm">
                          SMS
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Маркетинговые рассылки</p>
                        <p className="text-sm text-gray-500">Получать информацию о скидках и акциях</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="bg-purple-100 hover:bg-purple-200 border-purple-200 text-purple-600">
                          Email
                        </Button>
                        <Button variant="outline" size="sm">
                          SMS
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="destructive" size="sm">
                    <Icon name="Trash" className="h-4 w-4 mr-2" />
                    Удалить аккаунт
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Сохранить изменения
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
