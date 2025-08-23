import { Outlet, useLocation } from "react-router-dom"
import ItemStep from "../components/ItemStep/ItemStep"

export default function CreateDedicationLayout() {
    const location = useLocation();

    // Define las rutas y sus pasos correspondientes
    const stepRoutes = [
        '/crear-dedicatoria',     // Paso 1
        '/crear-dedicatoria/cancion',     // Paso 2
        '/crear-dedicatoria/imagen',     // Paso 3
        '/crear-dedicatoria/vista-previa',     // Paso 4
        '/crear-dedicatoria/copia-url',     // Paso 5
    ];

    // Función para determinar si un paso está activo
    const isStepActive = (stepIndex) => {
        const currentPath = location.pathname;
        return stepRoutes[stepIndex] === currentPath;
    };

    // Función para determinar si un paso está completado (rutas anteriores)
    const isStepCompleted = (stepIndex) => {
        const currentPath = location.pathname;
        const currentStepIndex = stepRoutes.findIndex(route => route === currentPath);
        return currentStepIndex > stepIndex;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-primary-1000 via-60% to-background flex flex-col items-center justify-center p-2 md:p-6 gap-12">
            <header className="flex gap-2 items-center w-fit">
                {stepRoutes.map((_, index) => (
                    <ItemStep 
                        key={index}
                        selected={isStepActive(index)}
                        completed={isStepCompleted(index)}
                        step={index + 1}
                    />
                ))}
            </header>
            <Outlet />
        </div>
    )
}