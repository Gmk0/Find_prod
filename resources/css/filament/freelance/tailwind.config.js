import preset from '../../../../vendor/filament/filament/tailwind.config.preset'

export default {
    presets: [preset],
    content: [
        './app/Filament/Freelance/**/*.php',
        './resources/views/filament/freelance/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
    ],
}
