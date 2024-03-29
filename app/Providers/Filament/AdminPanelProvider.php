<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Jeffgreco13\FilamentBreezy\BreezyCore;
use ShuvroRoy\FilamentSpatieLaravelHealth\FilamentSpatieLaravelHealthPlugin;
use Amendozaaguiar\FilamentRouteStatistics\FilamentRouteStatisticsPlugin;
use Brickx\MaintenanceSwitch\MaintenanceSwitchPlugin;
use App\Filament\Widgets\InfoUser;
use \Croustibat\FilamentJobsMonitor\FilamentJobsMonitorPlugin;
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->brandLogo(asset('images/logo/find_02.png'))
            ->login()
            ->spa(true)
            ->domain(env('FILAMENT_DOMAIN',''))
            ->viteTheme('resources/css/filament/freelance/theme.css')
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                Widgets\AccountWidget::class,
                InfoUser::class,
                //Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class

            ])
            ->plugins([
                BreezyCore::make()->myProfile(
                 shouldRegisterUserMenu: true, // Sets the 'account' link in the panel User Menu (default = true)
                // shouldRegisterNavigation: false, // Adds a main navigation item for the My Profile page (default = false)
                hasAvatars: false, // Enables the avatar upload form component (default = false)
                slug: 'my-profile' // Sets the slug for the profile page (default = 'my-profile')
            ),
            \FilipFonal\FilamentLogManager\FilamentLogManager::make(),
            FilamentSpatieLaravelHealthPlugin::make(),
            FilamentRouteStatisticsPlugin::make(),
            MaintenanceSwitchPlugin::make(),
            FilamentJobsMonitorPlugin::make(),


          //  \Hasnayeen\Themes\ThemesPlugin::make(),
        ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
