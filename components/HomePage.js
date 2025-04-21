import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Porta-Cartões em Couro Artesanais</h1>
        <p className="text-lg text-gray-600">Feitos à mão com elegância em Portugal</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((item) => (
          <motion.div 
            key={item}
            whileHover={{ scale: 1.05 }}
            className="w-full"
          >
            <Card className="rounded-2xl shadow-md">
              <img 
                src={`/card-${item}.jpg`} 
                alt={`Porta-cartão ${item}`} 
                className="rounded-t-2xl h-48 w-full object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Porta-Cartão Nº{item}</h2>
                <p className="text-sm text-gray-600 mb-4">Couro legítimo, costura manual, personalizável.</p>
                <p className="text-lg font-bold mb-4">€35,00</p>
                <Link href={`/checkout?item=${item}`}>
                  <Button className="w-full">Comprar</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="bg-white rounded-2xl p-6 shadow-md mb-12">
        <h3 className="text-2xl font-semibold mb-4">Sobre o Artesão</h3>
        <p className="text-gray-700">
          Sou artesão apaixonado por couro e tradição. Cada porta-cartão é feito à mão, com cuidado e precisão, usando técnicas manuais e couro de alta qualidade. Valorizo o feito à mão e acredito que cada peça carrega uma história.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Contato</h3>
        <form className="grid gap-4">
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu email" />
          <Textarea placeholder="Sua mensagem" />
          <Button type="submit">Enviar</Button>
        </form>
      </section>

      <footer className="text-center mt-12 text-gray-500">
        © 2025 Porta-Cartões em Couro Artesanais. Feito com ❤️ em Portugal.
      </footer>
    </div>
  );
}

// Página de checkout (simples)
export function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Finalizar Compra</h1>
      <p className="mb-6 text-gray-600">Porta-cartão artesanal em couro legítimo — €35,00</p>

      <form className="grid gap-4">
        <Input placeholder="Nome completo" required />
        <Input placeholder="Email" type="email" required />
        <Input placeholder="Endereço de entrega" required />

        {/* Integração com Stripe ou PayPal seria aqui */}
        <Button type="submit" className="bg-green-600 hover:bg-green-700">Pagar com Stripe</Button>
      </form>

      <p className="text-xs text-gray-400 mt-4">
        Este site usa Stripe para processar pagamentos com segurança.
      </p>
    </div>
  );
}
