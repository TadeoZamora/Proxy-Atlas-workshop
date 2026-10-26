# Atlas IA

Proyecto del workshop **React + IA** (Congreso Proxy). Un explorador de países con datos
reales y una guía de viaje generada por inteligencia artificial.

## Cómo usar este repositorio

Cada paso del workshop tiene su punto de control en una rama. Si te pierdes, vuelve a
una rama y sigue desde ahí:

```bash
git checkout paso-4
npm install
npm run dev
```

| Rama | Tema |
| --- | --- |
| `paso-0` | Proyecto base |
| `paso-1` | Componentes y JSX |
| `paso-2` | Props |
| `paso-3` | useState y eventos |
| `paso-4` | Listas y key |
| `paso-5` | Input controlado y renderizado condicional |
| `paso-6` | useEffect y fetch |
| `paso-7` | Estados de carga y error |
| `paso-8` | Organización de componentes y estado compartido |
| `paso-9` | Panel de detalle |
| `paso-10` | Instalación de Tailwind |
| `paso-11` | Estilos con Tailwind |
| `paso-12` | Servidor base (Express + SDK de IA) |
| `paso-13` | Endpoint `/api/guia` |
| `paso-14` | Proxy de Vite |
| `paso-15` | Lógica del componente `GuiaIA` |
| `paso-16` | Interfaz de la guía: proyecto final (`main`) |

Cada rama contiene el estado del proyecto **al terminar** ese paso.

## Servidor y API key (pasos 12 a 16)

1. Copia `.env.example` a `.env` y escribe tu API key y el nombre del modelo vigente
   según la documentación de tu proveedor.
2. `npm run server` en una terminal (requiere Node 20.6 o superior).
3. `npm run dev` en otra terminal.

La API key vive solo en el servidor: nunca la pongas en el código de React.
