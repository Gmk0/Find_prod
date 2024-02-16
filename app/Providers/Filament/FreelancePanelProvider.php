<?php

namespace App\Providers\Filament;

use App\Filament\Freelance\Resources\OrderResource\Widgets\LastOrder;
use App\Filament\Freelance\Resources\OrderResource\Widgets\OrderStat;
use App\Filament\Freelance\Widgets\HomeWidget;
use App\Filament\Freelance\Widgets\OrderDash;
use App\Http\Middleware\FreelanceAccess;
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
use Awcodes\Overlook\OverlookPlugin;
use Awcodes\Overlook\Widgets\OverlookWidget;
use Jeffgreco13\FilamentBreezy\BreezyCore;
use JibayMcs\FilamentTour\FilamentTourPlugin;
use pxlrbt\FilamentSpotlight\SpotlightPlugin;

class FreelancePanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('freelance')
            ->path('freelance-gestion')
            ->brandLogo(asset('images/logo/find_02.png'))
            ->login()
            ->sidebarCollapsibleOnDesktop(true)
            ->databaseNotifications()
            ->viteTheme('resources/css/filament/freelance/theme.css')
            ->profile()

            ->spa(true)

            ->colors([
                'primary' => Color::Orange,
            ])

           // ->domain('freelance')
            ->discoverResources(in: app_path('Filament/Freelance/Resources'), for: 'App\\Filament\\Freelance\\Resources')
            ->discoverPages(in: app_path('Filament/Freelance/Pages'), for: 'App\\Filament\\Freelance\\Pages')
            ->pages([
               // Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Freelance/Widgets'), for: 'App\\Filament\\Freelance\\Widgets')
            ->widgets([

                Widgets\AccountWidget::class,
                OrderDash::class,
                HomeWidget::class,
                LastOrder::class,
                //OrderStat::class,
               // Widgets\FilamentInfoWidget::class,
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
                DispatchServingFilamentEvent::class,
              \App\Http\Middleware\FreelanceAccessPanel::class,
            \App\Http\Middleware\AcountStatus::class,
            //\Hasnayeen\Themes\Http\Middleware\SetTheme::class,
            ])->plugins([

            BreezyCore::make()
            ->myProfileComponents(
                [
                    'personal_info' => \App\Livewire\AuthFreelance::class,

                    ]
            )->myProfile(
                shouldRegisterUserMenu: true, // Sets the 'account' link in the panel User Menu (default = true)
        shouldRegisterNavigation: false, // Adds a main navigation item for the My Profile page (default = false)
        hasAvatars: true,
                slug: 'my-profile'
            )->enableTwoFactorAuthentication(
                    force: false, // force the user to enable 2FA before they can use the application (default = false)
                    action: CustomTwoFactorPage::class, // optionally, use a custom 2FA page
                ),
            OverlookPlugin::make()
                ->sort(2)
                ->columns([
                    'default' => 1,
                    'sm' => 2,
                    'md' => 3,
                    'lg' => 4,
                    'xl' => 5,
                    '2xl' => null,
                ]),
                FilamentTourPlugin::make()->onlyVisibleOnce(true)
                ->enableCssSelector(),
                    SpotlightPlugin::make(),
                 //\Hasnayeen\Themes\ThemesPlugin::make(),


                ])
            ->authMiddleware([
                Authenticate::class,

            ]);
    }
}
