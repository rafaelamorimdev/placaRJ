import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';
import { Cloud, Lock, Mail, Moon, Sun, User } from 'lucide-react';
import '../styles/global.css'

const CreativeLoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br transition-colors duration-500  
      ${isDarkMode ? 'from-gray-900 via-purple-900 to-violet-900' : 'from-blue-50 via-blue-100 to-blue-200'}`}>
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${isDarkMode ? 'text-white/10' : 'text-blue-300/20'}`}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Cloud size={Math.random() * 40 + 20} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md backdrop-blur-sm bg-white">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Bem-vindo</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="rounded-full"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
            <CardDescription>
              Entre para começar sua jornada
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Login com redes sociais */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 opacity-0 group-hover:opacity-10"
                        initial={false}
                        animate={{ x: ['0%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Entrar com Google
                      </div>
                    </>
                  )}
                </Button>
              </motion.div>
            </div>

            {/* Separador animado */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <motion.span
                  className="bg-white  px-2 text-gray-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  ou continue com email
                </motion.span>
              </div>
            </div>

            {/* Formulário com animação */}
            <motion.form
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    className="pl-10"
                    placeholder="seu@email.com"
                  />
                  <User className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Senha</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    className="pl-10"
                  />
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500">
                  Entrar
                </Button>
              </motion.div>
            </motion.form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center w-full"
            >
              <Button variant="link" className="text-sm">
                Esqueceu sua senha?
              </Button>
              <div className="mt-2">
                <span className="text-sm text-gray-500">Não tem uma conta? </span>
                <Button variant="link" className="text-sm p-0">
                  Cadastre-se
                </Button>
              </div>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreativeLoginPage;