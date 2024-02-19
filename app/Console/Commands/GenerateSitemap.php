<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

use App\Models\Category;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically Generate an XML Sitemap';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $categoryMap = Sitemap::create();
        $categoryMap->add(Url::create('/categories')->setPriority(0.5));
        $categoryMap->add(Url::create('/contact')->setPriority(0.5));
        $categoryMap->add(Url::create('/categories')->setPriority(0.5));
        $categoryMap->add(Url::create('/faq')->setPriority(0.5));
        $categoryMap->add(Url::create('/about')->setPriority(0.5));
        $categoryMap->add(Url::create('/feed-back')->setPriority(0.5));
        $categoryMap->add(Url::create('/contact')->setPriority(0.5));
        $categoryMap->add(Url::create('/registration')->setPriority(0.5));
        $categoryMap->add(Url::create('/find-freelance')->setPriority(0.5));
        $categoryMap->add(Url::create('/registration/info')->setPriority(0.5));
        $categoryMap->add(Url::create('/tutorials')->setPriority(0.5));
        $categoryMap->add(Url::create('/services')->setPriority(0.5));


        Category::get()->each(function (Category $category) use ($categoryMap) {
            $categoryMap->add(
                Url::create("/categories/{$category->slug}")
                    ->setPriority(0.9)
                    //->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
            );
        });

        $categoryMap->writeToFile(public_path('sitemap.xml'));
    }
}
