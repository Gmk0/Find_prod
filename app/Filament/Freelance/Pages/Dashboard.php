<?php

namespace App\Filament\Freelance\Pages;

use Filament\Pages\Dashboard as PagesDashboard;
use Filament\Pages\Page;
use JibayMcs\FilamentTour\Tour\HasTour;
use JibayMcs\FilamentTour\Tour\Step;
use JibayMcs\FilamentTour\Tour\Tour;
use JibayMcs\FilamentTour\Highlight\HasHighlight;
class Dashboard extends PagesDashboard
{
    use HasTour;


    protected static ?string $title = 'Dashboard Freelance';


    public function tours(): array
    {
        return [
            Tour::make('dashboard')

            ->steps(

                Step::make()
                    ->title("Bienvenue sur votre tableau de bord !")
                    ->description(view('tutorial.dashboard.introduction')),

                Step::make('.fi-avatar')
                    ->title('Waouh ! Voici votre avatar !')
                    ->description('Vous avez l\'air bien ! C\'est ici que vous pouvez modifier vos informations.')
                    ->icon('heroicon-o-user-circle')
                    ->iconColor('primary'),

                Step::make('.nth-of-type(1)')
                    ->title('Voici votre solde !')
                    ->description('votre solde est maintenant affiché ici.')
                    ->icon('heroicon-o-currency-dollar')
                    ->iconColor('primary'),







            ),
        ];
    }





}
